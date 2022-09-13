module.exports = {
  "onboardingConfig": {"extends": ["config:base"]},
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "repositories": [
    "bernermic/renovate-testcase"
  ],
  "regexManagers": [
    {
      "description": "Update helmchart",
      "fileMatch": ["Makefile$"],
      "matchStrings": ["CHART_VERSION \\?= (?<currentValue>.*?)\\n"],
      "datasourceTemplate": "helm",
      "depNameTemplate": "helm"
    }
  ],
  "packageRules": [
    {
      "registryUrls": ["https://kubernetes.github.io/ingress-nginx"],
      "matchDatasources": ["helm"],
      "matchManagers": ["regex"],
      "matchPackageNames": ["ingress-nginx"]
    }
  ]
}

