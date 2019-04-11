for file in client/styles/*.css
do
  node-sass $file | cssmin > dist/styles/$(basename $file)
done