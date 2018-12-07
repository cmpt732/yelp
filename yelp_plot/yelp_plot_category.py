import json
import pandas as pd
import numpy as np
import itertools
from pyspark import SparkConf, SparkContext
from pyspark.sql import SparkSession, functions, types
from pyspark.sql.functions import split, explode
from pyspark.sql import functions as F
from pyspark.sql.functions import lit
import sys
assert sys.version_info >= (3, 5)  # make sure we have Python 3.5+
spark = SparkSession.builder.appName('yelp plot').getOrCreate()
assert spark.version >= '2.3'  # make sure we have Spark 2.3+
import plotly.plotly as py
import plotly.tools as tls

import matplotlib.pyplot as plt

business = spark.read.json(input_bus).select('business_id','categories')
business = business.toPandas()
cate_list = business['categories'].tolist()
merge_cate_list_tot = list(itertools.chain.from_iterable(cate_list))
mexican = spark.sql("SELECT * FROM business WHERE categories LIKE '%Mexican%'").count()
Italian = spark.sql("SELECT * FROM business WHERE categories LIKE '%Italian%'").count()
Japanese =  spark.sql("SELECT * FROM business WHERE categories LIKE '%Japanese%'").count()
Chinese =  spark.sql("SELECT * FROM business WHERE categories LIKE '%Chinese%'").count()
Asian = spark.sql("SELECT * FROM business WHERE categories LIKE '%Asian%'").count()
Thai = spark.sql("SELECT * FROM business WHERE categories LIKE '%Thai%'").count()
Mediterranean = spark.sql("SELECT * FROM business WHERE categories LIKE '%Mediter%'").count()
French = spark.sql("SELECT * FROM business WHERE categories LIKE '%French%'")
Vietnamese = spark.sql("SELECT * FROM business WHERE categories LIKE '%Vietnamese%'").count()
Greek = spark.sql("SELECT * FROM business WHERE categories LIKE '%Greek%'").count()
Indian = spark.sql("SELECT * FROM business WHERE categories LIKE '%Indian%'").count()
Korean = spark.sql("SELECT * FROM business WHERE categories LIKE '%Korean%'").count()
Hawaiian =  spark.sql("SELECT * FROM business WHERE categories LIKE '%Hawaiian'").count()
American = spark.sql("SELECT * FROM business WHERE categories LIKE '%American%'").count()
#mexican = 4428
#Italian = 4550
#Japanese = 2566
#Chinese = 4247
#Asian = 1818
#Thai = 1393
#Mediterrabeab = 1744
#French = 977
#Vietnamese = 1225
#Greek = 1023
#Indian = 1417
#Korean = 847
#Hawaiian = 304
#American = 10333
#Others = 20319

plt.rcdefaults()
fig, ax = plt.subplots()

# Example data
Res_name = ['American','Italian','Mexican','Chinese','Japanese','Asian Fusion','Mediterranean','Indian','Thai','Vietnamese','Greek','French',\
            'Korean','Hawaiian','Others']

y_pos = np.arange(len(Res_name))
value = [American,Italian,mexican,Chinese,Japanese,Asian,Mediterranean,Indian,Thai,Vietnamese,Greek,French,\
            Korean,Hawaiian,Others]
ax.barh(y_pos, value, align='center',
        color='palevioletred', ecolor='black')
ax.set_yticks(y_pos)
ax.set_yticklabels(Res_name)
ax.invert_yaxis()  # labels read top-to-bottom
ax.set_xlabel('Count')
ax.set_title('Categories of Restaurants')

plt.show()

