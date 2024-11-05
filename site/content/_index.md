---
title: 'Home'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: Effortlessly Measure Software Metrics and Detect Smells
      text: Codemetrica delivers precise software metrics and code smell detection engine for multiple languages. Gain insights into code health with accurate analysis.
      primary_action:
        text: Read the docs
        url: /docs/
        icon: rocket-launch
      secondary_action:
        text: See examples
        url: /example/
      announcement:
        text: "This project is in early development. Expect breaking changes."
        link:
          text: "Contribute"
          url: "https://github.com/sparklabOrg/codemetrica/CONTRIBUTING.md"
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: ""
      background:
        color: ""
        image:
          # Add your image background to `assets/media/`.
          filename: ""
          filters:
            brightness: 0.3
  # - block: stats
  #   content:
  #     items:
  #       - statistic: "1M+"
  #         description: |
  #           Websites built  
  #           with Hugo Blox
  #       - statistic: "10k+"
  #         description: |
  #           GitHub stars  
  #           since 2016
  #       - statistic: "3k+"
  #         description: |
  #           Discord community  
  #           for support
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-800"
      # Reduce spacing
      spacing:
        padding: ["1rem", 0, "1rem", 0]
  - block: features
    id: features
    content:
      title: Features
      text: Codemetrica is designed to be a one stop solution for all your code metrics and smell detection needs. Explore a comprehensive list of features in the documentation.
      items:
        - name: Code Metrics
          icon: scale
          description: "Calculate metrics: Cyclomatic complexity, LOC..."
        - name: Code Smells 
          icon: trash
          description: "Detect code smells: God class, DIT"
        - name: Test Smells 
          icon: trash
          description: "Detect code smells: God class, DIT"
        - name: Energy Smells 
          icon: light-bulb
          description: Coming soon!
          
        - name: Code Clone
          icon: document-duplicate
          description: Coming soon!

        # - name: Analyze repos
        #   icon: code-bracket
        #   description: Coming soon!
  # - block: cta-card
  #   content:
  #     title: "Start Writing with the #1 Effortless Documentation Platform"
  #     text: Hugo Blox Docs Theme brings all your technical knowledge together in a single, centralized knowledge base. Easily search and edit it with the tools you use every day!
  #     button:
  #       text: Get Started
  #       url: https://hugoblox.com/templates/details/docs/
  #   design:
  #     card:
  #       # Card background color (CSS class)
  #       css_class: "bg-primary-700"
  #       css_style: ""
---
