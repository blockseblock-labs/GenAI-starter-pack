{
  description = "AI Email Assistant - Next.js + Tailwind + Ollama dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_20
            ollama
          ];

          shellHook = ''
            export NODE_ENV=development
            echo " Dev shell ready!"
            echo " Run: npm install && npm run dev"
            echo " Make sure ollama is running: ollama serve"
          '';
        };
      });
}
