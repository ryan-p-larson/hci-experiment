import csv

rows = {}
f = open("JohnsonJohnson.csv")

def formatYear(year):
    if (year % 1 == 0):
        return "Q1"
    elif (year % 1 == .25):
        return "Q2"
    elif (year % 1 == .5):
        return "Q3"
    elif (year % 1 == .75):
        return "Q4"


for row in csv.DictReader(f):

    earnings = row['Quarterly Earnings']

    year = row['time'][:4]
    time = float(row['time'])
    quarter = formatYear(time)

    rows[time] = {"Quarterly Earnings":earnings, "Year":year, "Quarter":quarter}

with open("JohnsonJohnson - formatted.csv", "wb") as outfile:
    attrNames = ["Quarterly Earnings", "Year", "Quarter"]
    writer = csv.DictWriter(outfile, fieldnames = attrNames)
    writer.writeheader()
    for row in rows:
        writer.writerow(rows[row])
