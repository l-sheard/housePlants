from PIL import Image
import numpy as np
import os
import shutil
from PIL import Image
import os
import numpy as np

def convert_data_to_array(folder_path, target_size=(64, 64)):
    subfolders = [f.path for f in os.scandir(folder_path) if f.is_dir()]
    data = []
    classes = []
    for i, subfolder in enumerate(subfolders):
        print(subfolder)
        subfolder_files = os.listdir(subfolder)
        for file in subfolder_files:
            full_path = os.path.join(subfolder, file)
            img = Image.open(full_path)
            # Resize the image to a fixed size
            img = img.resize(target_size)
            img_array = np.array(img)
            data.append(img_array.flatten())
            classes.append(i)
    return np.asarray(classes), np.asarray(data)

training_classes, training_data = convert_data_to_array("backend\\train")
#testing_classes, testing_data = convert_data_to_array("./test")

import sklearn as sk
from sklearn.svm import SVC
import pickle

svm_classifier = SVC(kernel='rbf', C=100, gamma='scale', decision_function_shape='ovr')
svm_classifier.fit(training_data, training_classes)

# Assuming 'classifier' is your trained classifier
# Save SVM classifier to file using pickle
with open('svm_classifier.pkl', 'wb') as f:
    pickle.dump(svm_classifier, f)