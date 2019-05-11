import numpy as np
from physics_sim import PhysicsSim

class Task_TakeOff():
    """Task (environment) that defines the goal and provides feedback to the agent."""
    def __init__(self, 
                 init_pose=None, 
                 init_velocities=None, 
                 init_angle_velocities=None, 
                 runtime=5., 
                 target_pos=None):
        """Initialize a Task object.
        Params
        ======
            init_pose: initial position of the quadcopter in (x,y,z) dimensions and the Euler angles
            init_velocities: initial velocity of the quadcopter in (x,y,z) dimensions
            init_angle_velocities: initial radians/second for each of the three Euler angles
            runtime: time limit for each episode
            target_pos: target/goal (x,y,z) position for the agent
        """
        # Simulation
        self.sim = PhysicsSim(init_pose, init_velocities, init_angle_velocities, runtime) 
        self.action_repeat = 4

        # size = 12:
        #   pose = 'x', 'y', 'z', 'phi', 'theta', 'psi' = 6
        #   velocities = 'x_velocity', 'y_velocity', 'z_velocity' = 3
        #   angular_velocities = 'phi_velocity', 'theta_velocity', 'psi_velocity' = 3
        self.state_size = self.action_repeat * 9 # pose + velocities
        
        self.action_low = 0
        self.action_high = 1200
        self.action_size = 4
        
        # Goal
        self.target_pos = target_pos

    def get_reward(self):
        """Uses current pose of sim to return reward."""
        
        # Reward proportional to its vertical velocity up to 10
        # encouraging the quadcopter to take off and go up
        reward = min(self.sim.v[2], 10)
        
        # Penalty for changing too much the angles
#         reward -= .0002 * abs(self.sim.angular_v).sum()**2
            
        # Penalty for moving away from the target
        reward -= .001 * abs(self.sim.pose[:3] - self.target_pos).sum()**2
        
        return np.tanh(reward) / self.action_repeat

    def step(self, rotor_speeds):
        """Uses action to obtain next state, reward, done."""
        reward = 0
        state_all = []
        
        for _ in range(self.action_repeat):
            done = self.sim.next_timestep(rotor_speeds) # update the sim pose and velocities
            reward += self.get_reward() 
            
#             state_all.append(list(self.sim.pose) + list(self.sim.v) + list(self.sim.angular_v))
            state_all.append(list(self.sim.pose) + list(self.sim.v))
#             state_all.append(self.sim.pose)
        
        if self.sim.pose[2] > self.target_pos[2]:
#             print('\nTarget\'s height reached')
            
            # Bonus for reaching the target's height
            reward += 10
            
            # And we're done
            done = True
                
        next_state = np.concatenate(state_all)
        
        return next_state, reward, done

    def reset(self):
        """Reset the sim to start a new episode."""
        self.sim.reset()
#         state = np.array((list(self.sim.pose) + \
#                           list(self.sim.v) + \
#                           list(self.sim.angular_v)) * self.action_repeat)
        state = np.array((list(self.sim.pose) + \
                          list(self.sim.v)) * self.action_repeat)
#         state = np.concatenate([self.sim.pose] * self.action_repeat)
        
        return state