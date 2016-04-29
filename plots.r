library("ggplot2")
library("ggthemes")
library("reshape2")

setwd("Develop/hci-experiment/")

# Scatters
# Scatter 1 (RECALL CHART)
cars <- read.csv("data/cars.csv")

# Boxplots
# Box 1 (RECALL CHART)
flowers <- read.csv("data/flowers.csv")
boxPlotBase <- ggplot(flowers, aes(factor(species), petal.width))
# minimal
# Minimal - line
# Medium

# Box 2

# Bar Charts

# Bar Chart 1 (RECALL QUESTION)
# Grab the data, top 10 states sorted on assault
arrests <- head(USArrests[order(-USArrests$Assault),], 10)
# Prevent ordering by alphabet
arrests$State <- factor(rownames(arrests), levels = rownames(arrests)[order(arrests$Assault)])

barChartBase <- ggplot(arrests, aes(x = State, y = Assault))
# Minimal
barChartBase + theme_tufte(base_size = 14, ticks = F) +
  geom_bar(width = 0.25, fill = 'gray', stat = 'identity') +
  geom_hline(yintercept = seq(0, 300, 100), col = "white", lwd = 1) +
  coord_flip() + 
  labs(x = "State", y = "Assaults")
# Medium barChartBase + geom_bar(stat='identity') + labs(x = "State", y = "Assaults")


# Bar Chart 2
hairEyeColor = melt(HairEyeColor)
hairColorBar = ggplot(hairEyeColor, aes(x = Hair, y = value))
# hairColorBarSave + geom_bar(stat = 'identity') + labs(x = "Number of Students", y = "Hair Color")
