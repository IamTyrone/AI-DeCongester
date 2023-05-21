import matplotlib.pyplot as plt
import numpy as np
import json


class Visualizer:

    def __init__(self):
        file = open('./OldEsigodiniRoad.json')
        self.data = json.load(file)
        self.x_data = ["00-02", "02-04", "04-06", "06-08", "08-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22", "22-24"]

    def ploat_monday(self):
        data = self.data[0]

        y_data = []
        

        for record in data["params"]:
            print(record)
            y_data.append(record["carCountPer200M"])

        print(y_data)

        x = np.array(self.x_data)
        y = np.array(y_data)

        plt.title("Monday Traffic Volumes for Harare Road Route")
        plt.xlabel("Time Per Every 2 Hours(In 24 hour format)")
        plt.ylabel("Traffic Volume Average Graph Per 200 Meter")

        plt.plot(x, y)

        plt.grid(axis = 'x')

        plt.show()


    def ploat_tuesday(self):
        data = self.data[1]

        y_data = []

        for record in data["params"]:
            y_data.append(record["carCountPer200M"])

        x = np.array(self.x_data)
        y = np.array(y_data)

        plt.title("Tuesday Traffic Volumes for Harare Road Route")
        plt.xlabel("Time Per Every 2 Hours(In 24 hour format)")
        plt.ylabel("Traffic Volume Average Graph Per 200 Meter")

        plt.plot(x, y)

        plt.grid(axis = 'x')

        plt.show()

    def ploat_wednesday(self):
        data = self.data[2]

        y_data = []

        for record in data["params"]:
            y_data.append(record["carCountPer200M"])

        x = np.array(self.x_data)
        y = np.array(y_data)

        plt.title("Wednesday Traffic Volumes for Harare Road Route")
        plt.xlabel("Time Per Every 2 Hours(In 24 hour format)")
        plt.ylabel("Traffic Volume Average Graph Per 200 Meter")

        plt.plot(x, y)

        plt.grid(axis = 'x')

        plt.show()


    def ploat_thursday(self):
        data = self.data[3]

        y_data = []

        for record in data["params"]:
            y_data.append(record["carCountPer200M"])

        x = np.array(self.x_data)
        y = np.array(y_data)

        plt.title("Thursday Traffic Volumes for Harare Road Route")
        plt.xlabel("Time Per Every 2 Hours(In 24 hour format)")
        plt.ylabel("Traffic Volume Average Graph Per 200 Meter")

        plt.plot(x, y)

        plt.grid(axis = 'x')

        plt.show()


    def ploat_friday(self):
        data = self.data[4]

        y_data = []

        for record in data["params"]:
            y_data.append(record["carCountPer200M"])

        x = np.array(self.x_data)
        y = np.array(y_data)

        plt.title("Friday Traffic Volumes for Harare Road Route")
        plt.xlabel("Time Per Every 2 Hours(In 24 hour format)")
        plt.ylabel("Traffic Volume Average Graph Per 200 Meter")

        plt.plot(x, y)

        plt.grid(axis = 'x')

        plt.show()


    def ploat_saturday(self):
        data = self.data[5]

        y_data = []

        for record in data["params"]:
            y_data.append(record["carCountPer200M"])

        x = np.array(self.x_data)
        y = np.array(y_data)

        plt.title("Saturday Traffic Volumes for Harare Road Route")
        plt.xlabel("Time Per Every 2 Hours(In 24 hour format)")
        plt.ylabel("Traffic Volume Average Graph Per 200 Meter")

        plt.plot(x, y)

        plt.grid(axis = 'x')

        plt.show()


    def ploat_sunday(self):
        data = self.data[6]

        y_data = []

        for record in data["params"]:
            y_data.append(record["carCountPer200M"])

        x = np.array(self.x_data)
        y = np.array(y_data)

        plt.title("Saturday Traffic Volumes for Harare Road Route")
        plt.xlabel("Time Per Every 2 Hours(In 24 hour format)")
        plt.ylabel("Traffic Volume Average Graph Per 200 Meter")

        plt.plot(x, y)

        plt.grid(axis = 'x')

        plt.show()



# Visualizer().ploat_monday()
# Visualizer().ploat_tuesday()
# Visualizer().ploat_wednesday()
# Visualizer().ploat_thursday()
# Visualizer().ploat_friday()
# Visualizer().ploat_saturday()
Visualizer().ploat_sunday()