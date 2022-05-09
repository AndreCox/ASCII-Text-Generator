import os 

fontNames = []

# loop through all the files in the public/fonts directory
for file in os.listdir("public/fonts"):
    if file.endswith(".flf" or ".flc"):
        # get the font name
        fontName = file.split(".")[0]
        # add the font name to the list
        fontNames.append(fontName)
        
# create the json file
with open("public/fonts.json", "w") as f:
    f.write("{\n")
    f.write("\t\"fonts\": [\n")
    for font in fontNames:
        f.write("\t\t\"" + font + "\",\n")
    f.write("\t]\n")
    f.write("}")
    f.close()