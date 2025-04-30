#!/bin/bash

# Function to update text-white classes in a file
update_file() {
  local file=$1
  
  # Replace text-white with dark:text-white light:text-navy
  sed -i 's/text-white"/dark:text-white light:text-navy"/g' "$file"
  sed -i 's/text-white /dark:text-white light:text-navy /g' "$file"
  
  # Replace text-white/XX with dark:text-white/XX light:text-navy/XX
  sed -i 's/text-white\/\([0-9]*\)"/dark:text-white\/\1 light:text-navy\/\1"/g' "$file"
  sed -i 's/text-white\/\([0-9]*\) /dark:text-white\/\1 light:text-navy\/\1 /g' "$file"
  
  # Replace bg-white/XX with dark:bg-white/XX light:bg-navy/XX
  sed -i 's/bg-white\/\([0-9]*\)"/dark:bg-white\/\1 light:bg-navy\/\1"/g' "$file"
  sed -i 's/bg-white\/\([0-9]*\) /dark:bg-white\/\1 light:bg-navy\/\1 /g' "$file"
  
  # Replace border-white/XX with dark:border-white/XX light:border-navy/XX
  sed -i 's/border-white\/\([0-9]*\)"/dark:border-white\/\1 light:border-navy\/\1"/g' "$file"
  sed -i 's/border-white\/\([0-9]*\) /dark:border-white\/\1 light:border-navy\/\1 /g' "$file"
  
  # Replace hover:text-white with dark:hover:text-white light:hover:text-navy
  sed -i 's/hover:text-white"/dark:hover:text-white light:hover:text-navy"/g' "$file"
  sed -i 's/hover:text-white /dark:hover:text-white light:hover:text-navy /g' "$file"
  
  # Replace hover:bg-white/XX with dark:hover:bg-white/XX light:hover:bg-navy/XX
  sed -i 's/hover:bg-white\/\([0-9]*\)"/dark:hover:bg-white\/\1 light:hover:bg-navy\/\1"/g' "$file"
  sed -i 's/hover:bg-white\/\([0-9]*\) /dark:hover:bg-white\/\1 light:hover:bg-navy\/\1 /g' "$file"
  
  # Replace bg-navy with dark:bg-navy light:bg-white
  sed -i 's/bg-navy"/dark:bg-navy light:bg-white"/g' "$file"
  sed -i 's/bg-navy /dark:bg-navy light:bg-white /g' "$file"
  
  # Replace bg-navy-light with dark:bg-navy-light light:bg-gray-100
  sed -i 's/bg-navy-light"/dark:bg-navy-light light:bg-gray-100"/g' "$file"
  sed -i 's/bg-navy-light /dark:bg-navy-light light:bg-gray-100 /g' "$file"
  
  # Replace placeholder:text-white/XX with dark:placeholder:text-white/XX light:placeholder:text-navy/XX
  sed -i 's/placeholder:text-white\/\([0-9]*\)"/dark:placeholder:text-white\/\1 light:placeholder:text-navy\/\1"/g' "$file"
  sed -i 's/placeholder:text-white\/\([0-9]*\) /dark:placeholder:text-white\/\1 light:placeholder:text-navy\/\1 /g' "$file"
}

# Update all component files
for file in src/components/*.tsx; do
  if [[ "$file" != "src/components/ThemeProvider.tsx" && "$file" != "src/components/ThemeToggle.tsx" && "$file" != "src/components/Navbar.tsx" ]]; then
    echo "Updating $file"
    update_file "$file"
  fi
done

echo "All components updated!"

