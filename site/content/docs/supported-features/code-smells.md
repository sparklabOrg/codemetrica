---
title: Code Smells
weight: 20
toc: false
---

## General Smells

| Smell                      |  C  | C++ | C#  | Go  | Java | PHP |           Python            | Rust | TypeScript |
| -------------------------- | :-: | :-: | :-: | :-: | :--: | :-: | :-------------------------: | :--: | :--------: |
| BrokenModularization       |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| Complex Conditional        |  -  |  -  |  -  |  -  |  -   |  -  |             ✅              |  -   |     -      |
| DeficientEncapsulation     |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| Dispersed Coupling         |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| Empty catch clause         |  -  |  -  |  -  |  -  |  -   |  -  |             🟡             |  -   |     -      |
| HubLikeModularization      |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| ImperativeAbstraction      |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| InsufficientModularization |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| Intensive Coupling         |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| Long Identifier            |  -  |  -  |  -  |  -  |  -   |  -  |             ✅              |  -   |     -      |
| Long Statement             |  -  |  -  |  -  |  -  |  -   |  -  |             ✅              |  -   |     -      |
| Magic Number               |  -  |  -  |  -  |  -  |  -   |  -  |             🟡             |  -   |     -      |
| Message Chain              |  -  |  -  |  -  |  -  |  -   |  -  |             🟡             |  -   |     -      |
| Missing default            |  -  |  -  |  -  |  -  |  -   |  -  |             ✅              |  -   |     -      |
| MultifacetedAbstraction    |  -  |  -  |  -  |  -  |  -   |  -  |             🟡             |  -   |     -      |
| Refused Bequest            |  -  |  -  |  -  |  -  |  -   |  -  |     OverrideRatio > 0.5     |  -   |     -      |
| Shotgun Surgery            |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| Spaghetti Code             |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| Speculative Generality     |  -  |  -  |  -  |  -  |  -   |  -  | IsAbstractChildrenCount < 3 |  -   |     -      |
| Swiss Army Knife           |  -  |  -  |  -  |  -  |  -   |  -  |             🟡             |  -   |     -      |
| UnexploitedEncapsulation   |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |
| UnnecessaryAbstraction     |  -  |  -  |  -  |  -  |  -   |  -  |             🟡             |  -   |     -      |
| UnutilizedAbstraction      |  -  |  -  |  -  |  -  |  -   |  -  |              -              |  -   |     -      |


## Class Level Smells

| Smell                        |  C  | C++ | C#  | Go  | Java | PHP | Python | Rust | TypeScript |
| ---------------------------- | :-: | :-: | :-: | :-: | :--: | :-: | :----: | :--: | :--------: |
| Brain Class                  |  -  |  -  |  -  |  -  |  _   |  -  |   -    |  -   |     -      |
| Class Data Should Be Private |  -  |  -  |  -  |  -  |  _   |  -  |   -    |  -   |     -      |
| Complex Class                |  -  |  -  |  -  |  -  |  _   |  -  |  🟡   |  -   |     -      |
| Data Class                   |  -  |  -  |  -  |  -  |  _   |  -  |  🟡   |  -   |     -      |
| God Class                    |  -  |  -  |  -  |  -  |  _   |  -  |  🟡   |  -   |     -      |
| Large Class                  |  -  |  -  |  -  |  -  |  _   |  -  |  🟡   |  -   |     -      |
| Lazy Class                   |  -  |  -  |  -  |  -  |  _   |  -  |   ✅   |  -   |     -      |


## Method Level Smells

| Smell                                   |  C  | C++ | C#  | Go  | Java | PHP | Python | Rust | TypeScript |
| --------------------------------------- | :-: | :-: | :-: | :-: | :--: | :-: | :----: | :--: | :--------: |
| Abstract Function Call From Constructor |  -  |  -  |  -  |  -  |  -   |  -  |   -    |  -   |     -      |
| Brain Method                            |  -  |  -  |  -  |  -  |  -   |  -  |   -    |  -   |     -      |
| Complex Method                          |  -  |  -  |  -  |  -  |  -   |  -  |   ✅   |  -   |     -      |
| Long Method                             |  -  |  -  |  -  |  -  |  ✅  |  -  |   ✅   |  -   |     -      |
| Long Parameter List                     |  -  |  -  |  -  |  -  |  -   |  -  |   ✅   |  -   |     -      |
