"""
Class for plotting a quadrotor

Author: Daniel Ingram (daniel-s-ingram)
"""

import uuid
from math import cos, sin
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.animation as animation
from IPython.display import HTML

class Quadrotor():
    def __init__(self, results, target=None, size=0.25, figsize=(10, 10)):
        self.id = uuid.uuid4()
        self.p1 = np.array([size / 2, 0, 0, 1]).T
        self.p2 = np.array([-size / 2, 0, 0, 1]).T
        self.p3 = np.array([0, size / 2, 0, 1]).T
        self.p4 = np.array([0, -size / 2, 0, 1]).T

        self.x_data = []
        self.y_data = []
        self.z_data = []
        
        self.results = results
        self.target = target
        self.size = size
        
        if target is not None:
            min_xlim = target[0] - 5
            max_xlim = target[0] + 5
            min_ylim = target[1] - 5
            max_ylim = target[1] + 5
        else:
            min_xlim = - 5
            max_xlim = 5
            min_ylim = - 5
            max_ylim = 5
            
        self.min_xlim = min(results['x'] + [min_xlim])
        self.max_xlim = max(results['x'] + [max_xlim])
        self.min_ylim = min(results['y'] + [min_ylim])
        self.max_ylim = max(results['y'] + [max_ylim])
        self.min_zlim = min(results['z'])
        self.max_zlim = max(results['z'])

        fig = plt.figure(figsize=figsize)
        self.ax = fig.add_subplot(111, projection='3d')
        self.ax.view_init(elev=15)
            
        def animate(i):
            self.update_pose(results['x'][i], 
                             results['y'][i], 
                             results['z'][i], 
                             results['psi'][i], 
                             results['theta'][i], 
                             results['phi'][i])
        
        fps = 10
        self.anim = animation.FuncAnimation(fig, 
                                            animate, 
                                            frames=len(results['time']),
                                            interval=1000/fps)
        
        self.anim_file_name = 'quadrotor_anim_{}'.format(self.id)
        self.anim.save(self.anim_file_name + '.mp4', writer='ffmpeg', fps=fps)
        # self.anim.save(self.anim_file_name + '.gif', writer='imagemagick', fps=fps)

    def to_html5_video(self):
#         HTML(self.anim.to_html5_video())
        HTML("""
        <div align="middle">
            <video width="80%" controls>
              <source src="{anim_file_name}.mp4" type="video/mp4">
            </video>
        </div>
        """.format(anim_file_name=self.anim_file_name))

    def update_pose(self, x, y, z, roll, pitch, yaw):
        self.x = x
        self.y = y
        self.z = z
        self.roll = roll
        self.pitch = pitch
        self.yaw = yaw
        self.x_data.append(x)
        self.y_data.append(y)
        self.z_data.append(z)

        self.plot()

    def transformation_matrix(self):
        x = self.x
        y = self.y
        z = self.z
        roll = self.roll
        pitch = self.pitch
        yaw = self.yaw
        return np.array([[cos(yaw) * cos(pitch), 
                          -sin(yaw) * cos(roll) + cos(yaw) * sin(pitch) * sin(roll), 
                          sin(yaw) * sin(roll) + cos(yaw) * sin(pitch) * cos(roll), x], 
                         [sin(yaw) * cos(pitch), cos(yaw) * cos(roll) + sin(yaw) * sin(pitch) * \
                          sin(roll), -cos(yaw) * sin(roll) + sin(yaw) * sin(pitch) * cos(roll), y], 
                         [-sin(pitch), cos(pitch) * sin(roll), cos(pitch) * cos(yaw), z]])

    def plot(self):  # pragma: no cover
        T = self.transformation_matrix()

        p1_t = np.matmul(T, self.p1)
        p2_t = np.matmul(T, self.p2)
        p3_t = np.matmul(T, self.p3)
        p4_t = np.matmul(T, self.p4)

        plt.cla()
        
        # Set boundaries
        plt.xlim(self.min_xlim, self.max_xlim)
        plt.ylim(self.min_ylim, self.max_ylim)
        self.ax.set_zlim(self.min_zlim, self.max_zlim)
        
        # Draw target
        if self.target is not None:
            self.ax.scatter(self.target[0], 
                            self.target[1], 
                            self.target[2], 
                            s=10 * self.size, 
                            c='blue')

        self.ax.plot([p1_t[0], p2_t[0], p3_t[0], p4_t[0]],
                     [p1_t[1], p2_t[1], p3_t[1], p4_t[1]],
                     [p1_t[2], p2_t[2], p3_t[2], p4_t[2]], 'k.')

        self.ax.plot([p1_t[0], p2_t[0]], [p1_t[1], p2_t[1]],
                     [p1_t[2], p2_t[2]], 'r-')
        self.ax.plot([p3_t[0], p4_t[0]], [p3_t[1], p4_t[1]],
                     [p3_t[2], p4_t[2]], 'r-')

        self.ax.plot(self.x_data, self.y_data, self.z_data, 'b:')