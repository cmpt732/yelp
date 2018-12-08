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
