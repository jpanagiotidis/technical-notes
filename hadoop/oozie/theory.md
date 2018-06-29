# Oozie

## Definitions
* Action
  * An execution/computation task (Map-Reduce job, Pig job, a shell command). It can also be referred as task or 'action node'.
* Workflow
  * A collection of actions arranged in a control dependency DAG (Direct Acyclic Graph). "control dependency" from one action to another means that the second action can't run until the first action has completed.
* Workflow Definition
  * A programmatic description of a workflow that can be executed.
* Workflow Definition Language
  * The language used to define a Workflow Definition.
* Workflow Job
  * An executable instance of a workflow definition.
* Workflow Engine
  * A system that executes workflows jobs. It can also be referred as a DAG engine.
