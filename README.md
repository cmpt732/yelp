# Yelp Recommender
The project is to build a recommender system that will recommend restaurants to users based their reviews using Yelp Open Dataset.

**Folder directory: code**

| File | Description |
| --- | --- |
| `yelp_recommender.py` | the Item-based Collabrative Filtering Algorithm is implemented with Spark |
| `yelp_nlp.py` | Select features and calculate the weights to facilitate recommendation |
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

**Folder directory: Data_process**

| File | Description |
| --- | --- |
| `yelp_business_data_clean.py` | filter out all restaurants business data |
| `yelp_review_data_clean.py` | filter out all restaurant review data |

| File | Description |
| --- | --- |
| `yelp_recommendation_info.py` | merge business data, recommendation info and nlp feature info |

* recommendation for cold start *
| File | Description |
| --- | --- |
| `yelp_visitor_recommend.py` | recommendation for visitors |

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
