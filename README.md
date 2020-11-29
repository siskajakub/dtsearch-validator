# dtsearch-validator
Search term validator for dtSearch search engine syntax.

# Description
dtSearch Validator is a HTML web page with dtSearch search term validator implemented suing [Monaco Editor](https://microsoft.github.io/monaco-editor/).  
Software made by [dtSearch Corp.](https://dtsearch.com/) uses specific search term syntax that is trying to be validated by this editor.  
dtSearch Validator is developed as support tool for creating valid search terms for [Relativity](https://www.relativity.com/) review platform.  
As Relativity is mainly used by legal experts, validator implements more strict rules to provide better understating of search terms and eliminate confusion. For details please refer to [Syntax](#Syntax) section.

# Syntax
dtSearch Validator implements basic [Relativity dtSearch syntax option](https://help.relativity.com/RelativityOne/Content/Relativity/dtSearch/Using_dtSearch_syntax_options.htm).

- Logical operators
- Wildcards
- Proximity operators
- Fuzzy and stemming syntax

Current implementation does only basic syntax highlighting and does not perform complex syntactic check. It implements sufficient minimum to improve search term creation.

# Install
dtSearch Validator is intended as stand-alone web page. However, it can be embedded into existing page with minor code adjustments.  
Monaco Editor code needs to be added to ``dtsearch-validator/js`` folder in order for validator to work.

# Notes
dtSearch Validator implements automatic dark and light theming.  
Implementation was succesfully tested in Firefox, Edge and Chrome web browsers.