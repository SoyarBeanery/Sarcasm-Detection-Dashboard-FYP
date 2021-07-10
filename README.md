# Sarcasm Detection From Cyberbullying And CyberAggressive Cases Online Through Social Media Analytics

> A Social Media Mining Approach

<div align="center">
  <br>
  <img src="https://img.shields.io/badge/DASHBOARDING%20WITH-BootStrap-green?style=for-the-badge"
      alt="API stability" height="25"/>
</div>

<br>

Sarcastic Cyberbullying Detection circulated on social media platforms has lead to unfavourable outcomes though hate speech due to the widespread usage of online social networks. As such, the importance of identifying sarcastic cyberbullying cases are crucial in order to maintain the peace and sovereignty of a nation. There are manual fact checking websites that exist but they are limited and unable to cope with the fast moving and large volumes of online news circulating on social media. The solution to this lies in automated factchecking applications which can be automated and scaled to suit the large volume of data. There are still limitations to this as readily available datasets lack multi-dimension information that could be utilized to improve an accuracy of a predictive model’s performance when detecting sarcastic cyberbullying cases online. Since the objectives of sarcastic cyberbullying detection is to detect a negative comment from the messages it receives by a user, sarcastic cyberbullying online in posts, comments, or even in articles display distinct linguistic and psycholinguistic features that affects the human brain and emotions in a certain way. Hence, this paper employs using social media analytics to investigate and discover new attributes that can be derived from news texts such as their linguistic and psycholinguistic features that are influential in deriving sarcastic cyberbullying cases. This paper is also an expansion of previous work that used attributes derived from Twitter data. The best machine learning model derived from this paper achieved an accuracy of 77.35% in detecting sarcastic cyberbullying.

Keywords: Sarcasm Detection, Cyberbullying, Cyber Aggression, Social Media Analytics, Classification Modelling, Machine learning, Social Network Analysis

## Project Organization

    ├── LICENSE
    ├── Makefile           <- Makefile with commands like `make data` or `make train`
    ├── README.md          <- The top-level README for developers using this project.
    ├── data
    │   ├── external       <- Data from third party sources.
    │   ├── interim        <- Intermediate data that has been transformed.
    │   ├── processed      <- The final, canonical data sets for modeling.
    │   └── raw            <- The original, immutable data dump.
    │
    ├── docs               <- A default Sphinx project; see sphinx-doc.org for details
    │
    ├── models             <- Trained and serialized models, model predictions, or model summaries
    │
    ├── notebooks          <- Jupyter notebooks. Naming convention is a number (for ordering),
    │                         the creator's initials, and a short `-` delimited description, e.g.
    │                         `1.0-jqp-initial-data-exploration`.
    │
    ├── references         <- Data dictionaries, manuals, and all other explanatory materials.
    │
    ├── reports            <- Generated analysis as HTML, PDF, LaTeX, etc.
    │   └── figures        <- Generated graphics and figures to be used in reporting
    │
    ├── requirements.txt   <- The requirements file for reproducing the analysis environment, e.g.
    │                         generated with `pip freeze > requirements.txt`
    │
    ├── setup.py           <- makes project pip installable (pip install -e .) so src can be imported
    ├── src                <- Source code for use in this project.
    │   ├── __init__.py    <- Makes src a Python module
    │   │
    │   ├── data           <- Scripts to download or generate data
    │   │   └── make_dataset.py
    │   │
    │   ├── features       <- Scripts to turn raw data into features for modeling
    │   │   └── build_features.py
    │   │
    │   ├── models         <- Scripts to train models and then use trained models to make
    │   │   │                 predictions
    │   │   ├── predict_model.py
    │   │   └── train_model.py
    │   │
    │   └── visualization  <- Scripts to create exploratory and results oriented visualizations
    │       └── visualize.py
    │
    └── tox.ini            <- tox file with settings for running tox; see tox.readthedocs.io

---
