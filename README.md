# Yelp Recommender
The project is to build a recommender system that will recommend restaurants to users based their reviews using Yelp Open Dataset.

Details of our performance on demo day, please see presentation.pptx


**Folder directory: code**

| File | Description |
| --- | --- |
| `yelp_recommender.py` | the Item-based Collabrative Filtering Algorithm is implemented with Spark |
| `yelp_nlp.py` | Select features and calculate the weights to facilitate recommendation |
| `yelp_visitor_recommend.py` | recommendation for visitors (cold start) |
| `load_tools.py` | Load tools |

yelp_recommender.py

| Arguments | Description |
| --- | --- |
| `#args1: inputs_review` | input directory for review.json |
| `#args2: inputs_business` | input directory for business.json |
| `#args3: k` | the maximum number of recommended resturants for each user |
| `#args4: output` | output directory |

yelp_nlp.py

| Arguments | Description |
| --- | --- |
| `#args1: inputs` | input directory for review.json |
| `#args2: output` | output directory |

yelp_visitor_recommend.py

| Arguments | Description |
| --- | --- |
| `#args1: input_bus` | input directory for business.json |
| `#args2: input_rev` | input directory for review.json |
| `#args3: input_feature` | input directory for nlp feature scores |
| `#args4: city` | input city |
| `#args5: state` | input state |
| `#args6: keywords` | input a list of keywords|
| `#args7: k` | input an integer |
| `#args8: output` | output directory |

**Folder directory: Data_process**

| File | Description |
| --- | --- |
| `yelp_business_data_clean.py` | filter out all restaurants business data |
| `yelp_review_data_clean.py` | filter out all restaurant review data |
| `yelp_recommendation_info.py` | merge business data, recommendation info and nlp feature info |
| `yelp_visitor_recommend.py` | recommendation for visitors |

yelp_visitor_recommend.py

| Arguments | Description |
| --- | --- |
| `#args1: input_bus` | input directory for business.json |
| `#args2: input_rev` | input directory for review.json |
| `#args3: input_feature` | input directory for nlp feature scores |
| `#args4: city` | input city |
| `#args5: state` | input state |
| `#args6: keywords` | input a list of keywords |
| `#args7: k` | input an integer |
| `#args8: output` | output directory |


yelp_business_data_clean.py

| Arguments | Description |
| --- | --- |
| `#args1: inputs_bus` | input directory for business.json |
| `#args2: output` | output directory |

yelp_review_data_clean.py

| Arguments | Description |
| --- | --- |
| `#args1: input_bus` | input directory for business.json |
| `#args2: input_rev` | input directory for review.json |
| `#args3: output` | output directory |

yelp_recommendation_info.py

| Arguments | Description |
| --- | --- |
| `#args1: input_bus` | input directory for business.json |
| `#args2: input_recommend` | input directory for our top-k recommendation |
| `#args3: input_feature` | input directory for nlp feature scores |
| `#args4: output` | output directory |

**Folder directory: Recommendation**

This folder contains the web server code that provides a web interface for users to search restaurants by the user id.
The web page will show wordcloud pictures, feature scores, starts for the recommended restaurants.

The server side is based on Spring Boot and Spring data rest to provide restful API. The front-end is using AngularJS to present one-page web app.

** Configuration **

/src/main/resources/applications.properties

It defines the DB connection url, user id,password etc.

**How to build and start the web**

1.Go to Recommendation folder, run following command to build the app:
mvn clean install

It will automatically generate the 'db-create.sql' that help you create the database. By default,it uses mysql.  
You can use any mysql client to run the 'db-create.sql' to create the database and tables.  

It should also produce the jar file in 'recommendation/target/recommendation-0.0.1-SNAPSHOT.jar'

2.Run following command start the web server:

_java -jar <your 'yelp' checkout folder>/recommendation/target/recommendation-0.0.1-SNAPSHOT.jar_

3.You can browse the website via url of 'http://localhost:8080/index.html'


