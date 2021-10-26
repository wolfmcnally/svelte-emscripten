#/bin/zsh

emcc \
    hello.cpp memzero.cpp sha256.cpp hex.cpp \
    -O0 \
    -o ../src/lib/hello.js \
    -s EXPORT_NAME='create_hello_module' \
    -s EXPORTED_FUNCTIONS='["_free","_malloc"]' \
    -s EXPORT_ES6=1 \
    -s MODULARIZE=1 \
    -s ENVIRONMENT='web' \
    -s NO_DISABLE_EXCEPTION_CATCHING \
    --post-js hello.post.js

cp hello.d.ts ../src/lib/

    # -s EXPORTED_FUNCTIONS='["_int_sqrt","_add","_print_u8","_increment_u8","_print_u16","_print_u8_array"]' \
    # -O3 \
    # -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]' \
