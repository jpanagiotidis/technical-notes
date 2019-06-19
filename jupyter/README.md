# Jupyter

## Create new environment
```
conda create --name ${ENV_NAME} --file ${PATH_TO_FILE}/requirements.txt
conda activate ${ENV_NAME}
python -m ipykernel install --user --name ${ENV_NAME} --display-name ${ENV_HUMAN_FRIENDLY_NAME}
```