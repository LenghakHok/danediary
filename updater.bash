for dir in backend frontend configs utils ui; do
  for subdir in "$dir"/*/; do
    if [ -d "$subdir" ] && [ -f "$subdir/package.json" ]; then
      echo "Updating in $subdir"
      (cd "$subdir" && bun update)
    fi
  done
done