# Pokemon External Data API

## Description
This project is a minimal REST API built with Node.js and Express.  
It consumes data from the public PokeAPI and exposes a custom endpoint that retrieves and transforms information about the first generation of Pokémon.

## How to run locally

# 1. Clone the repository:
```bash
git clone <your-repo-url>
cd poketest
```
# 2. Install dependencies:

```bash
npm install
```

# 3. Run the application:

```bash
npm run dev
```
# 4. Open in browser:

```bash
http://localhost:3000/external-data
```

## Endpoint
```bash
GET /external-data
```
Returns a list of Pokémon with transformed data (not the raw response from the external API).

## External API used

- [PokeAPI](https://pokeapi.co/)

# Documentation

All project documentation can be found in the **Documentation** folder.

This includes:
- Class diagram
- BPMN diagram  
- Draw.io source files  
- Exported image versions of the diagrams