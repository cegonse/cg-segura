#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

# Usage check
if [[ $# -lt 1 || $# -gt 2 ]]; then
    echo "Usage: $0 <url_list_file> [output_directory]"
    exit 1
fi

URL_FILE="$1"
OUTPUT_DIR="${2:-.}"

# Validate input file
if [[ ! -f "$URL_FILE" ]]; then
    echo "Error: File '$URL_FILE' not found."
    exit 1
fi

# Create output directory if needed
mkdir -p "$OUTPUT_DIR"

# Process URLs
while IFS= read -r url || [[ -n "$url" ]]; do
    # Trim leading/trailing whitespace
    url="$(echo "$url" | xargs)"

    # Skip empty lines or comments
    if [[ -z "$url" || "$url" == \#* ]]; then
        continue
    fi

    echo "Downloading: $url"

    if ! wget -P "$OUTPUT_DIR" "$url"; then
        echo "Warning: Failed to download $url"
    fi

done < "$URL_FILE"

echo "Done."
