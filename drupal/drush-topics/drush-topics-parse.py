import subprocess
import os

pages = [
  'core-global-options', 
  'docs-bashrc', 
  'docs-bastion', 
  'docs-bootstrap', 
  'docs-configuration', 
  'docs-context', 
  'docs-cron', 
  'docs-api', 
  'docs-commands', 
  'docs-make-example', 
  'docs-make', 
  'docs-errorcodes', 
  'docs-examplecommand',
  'docs-example-sync-via-http',
  'docs-example-sync-extension',
  'docs-examplescript',
  'docs-policy',
  'docs-output-formats',
  'docs-ini-files',
  'docs-readme',
  'docs-shell-aliases',
  'docs-scripts',
  'docs-aliases',
  'docs-strict-options'
]

for p in pages:
  f = open('drush-topic-' + p + '.txt', 'w')
  subprocess.call(["drush", "topic", p], stdout=f)
  f.close()