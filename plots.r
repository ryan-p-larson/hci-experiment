library("ggplot2")
library("ggthemes")
library("reshape2")
library("stringr")
library("MASS") #roads dataset

setwd("Develop/hci-experiment/")

### Scatters
# Scatter 1 (RECALL CHART)
cars <- read.csv("data/cars.csv")
carsMakes <- data.frame(table(cars$make))
carMakes <- carsMakes[ order(-carsMakes$Freq), ] # order by car makers with the most cars

scatterBase <- ggplot(cars, aes(x = power..hp., y = economy..mpg.))
scatterMinimal <- scatterBase + geom_rangeframe() + 
  theme_tufte() +
  scale_x_continuous(breaks = extended_range_breaks()(cars$power..hp.)) +
  scale_y_continuous(breaks = extended_range_breaks()(cars$economy..mpg.))
scatterMedium <- scatterBase +
  geom_point() +
  geom_rug() +
  theme_tufte(ticks = F) +
  labs(x = "Economy (mpg)", y = "Power (hp)") +
  ggtitle("Car Economy as related to Power")
scatterHeavy <- scatterBase + geom_point() +
  scale_fill_discrete() + # needs work to split the make columns 
  labs(x = "Economy (mpg)", y = "Power (hp)") 

#Scatter 2
roads <- road
roads$state <- rownames(roads)
scatterPlot2 <- ggplot(roads, aes(x = drivers, y = deaths)) + 
  geom_point(stat = 'identity') +
  labs(x = "State Drivers", y = "State Deaths") +
  ggtitle("State Auto Deaths and Driving Population")

# Scatter 3
scatterPlot3 <- ggplot(faithful, aes(x = eruptions, y = waiting)) +
  geom_point() +
  theme_excel() +
  labs(x = "Waiting time until Eruption", y = "# Eruptions in a row") +
  ggtitle("Relationship between Eruptions and Waiting time for Old Faithful")


### Boxplots
# Box 1 (RECALL CHART)
flowers <- read.csv("data/flowers.csv")
boxPlotBase <- ggplot(flowers, aes(factor(species), petal.width))

boxPlotMinimal <- boxPlotBase + theme_tufte(ticks = FALSE) + 
  geom_tufteboxplot() +
  labs(x = "Species", y = "Petal Width (cm)") +
  ggtitle("Flower Species' Petal Width")
boxPlotMinimalLine <- boxPlotBase + theme_tufte(ticks = FALSE) + 
  geom_tufteboxplot(median.type = "line", hoffset = 0.01) +
  labs(x = "Species", y = "Petal Width (cm)") +
  ggtitle("Flower Species' Petal Width")
boxPlotMedium <- boxPlotBase + geom_tufteboxplot(median.type = "line", 
                                                 whisker.type = 'line', hoffset = 0, width = 5) +
  labs(x = "Species", y = "Petal Width (cm)") +
  ggtitle("Flower Species' Petal Width")
boxPlotHeavy <- boxPlotBase + 
  geom_boxplot() +
  scale_fill_identity() +
  labs(x = "Species", y = "Petal Width (cm)") +
  ggtitle("Flower Species' Petal Width")

# Box 2
mpgBox <- ggplot(mpg, aes(class, hwy)) +
  geom_tufteboxplot(median.type = "line", whisker.type = 'line', hoffset = 0, width = 5) +
  labs(x = "Car Class", y = "Highway MPG") +
  ggtitle("Classes of Cars and their Effeciency")

# Box 3
sales <- read.csv("data/JohnsonJohnson - formatted.csv")
boxPlot3 <- ggplot(sales, aes(x = Quarter, y = Quarterly.Earnings)) +
  geom_boxplot() +
  labs(x = "Quarter", y = "Earnings") +
  ggtitle("Quartlery Earnings over 25 years at Johnson & Johnson")

### Bar Charts

# Bar Chart 1 (RECALL QUESTION)
# Grab the data, top 10 states sorted on assault
arrests <- head(USArrests[order(-USArrests$Assault),], 10)
# Prevent ordering by alphabet
arrests$State <- factor(rownames(arrests), levels = rownames(arrests)[order(-arrests$Assault)]) #minus the order for minimal chart
barChartBase <- ggplot(arrests, aes(x = State, y = Assault))

barChartMinimal <- barChartBase + theme_tufte(base_size = 14, ticks = F) +
  geom_bar(width = 0.25, fill = 'gray', stat = 'identity') +
  geom_hline(yintercept = seq(0, 300, 100), col = "white", lwd = 1) + #y ticks
  coord_flip() + #horizontal bar chart
  labs(x = "State", y = "Assaults") +
  theme(axis.text.y = element_text(hjust=0)) #Left aligned labels 
barChartMedium <- barChartBase + geom_bar(stat='identity') + labs(x = "State", y = "Assaults")
barChartHeavy <- barChartBase + theme_excel() +
  geom_bar(stat = 'identity') + 
  labs(x = "State", y = "Assaults")

# Bar Chart 2
hairEyeColor <- melt(HairEyeColor)
hairColorBar <- ggplot(hairEyeColor, aes(x = Hair, y = value)) + 
  geom_bar(stat = 'identity') + 
  labs(x = "# Students", y = "Hair Color") +
  ggtitle("Students and their Hair Color in 8th Grade")

# Bar Chart 3
liquorSales <- read.csv("data/Iowa_Liquor_Sales.csv")
barChart3 <- ggplot(liquorSales, aes(x = County, y = Alcohol.Sold..millions.)) +
  geom_bar(stat = 'identity') +
  theme_excel() +
  scale_y_continuous(breaks = pretty(liquorSales$Alcohol.Sold..millions., n = 10)) +
  labs(y = "Alchol Sales ($ millions)") +
  ggtitle("Alchohol Sales by County in Iowa")
