<script lang="ts">
  import instantiate_hello, { HelloModule } from "./hello.js"

  let hello: HelloModule;

  export let message = '';

  let number_list: number[] = [];

  (async () => {
    hello = await instantiate_hello();
    message = hello.return_string();
    number_list = hello.reverse([1, 2, 3]);

    console.log(hello.sha256("Hello, world!"));
    const hex = hello.data_to_hex(new Uint8Array([0, 1, 2, 3, 0xff]));
    console.log(hex);
    const data = hello.hex_to_data(hex);
    console.log(data);
    const badData = hello.hex_to_data("not hex");
    console.log(badData); // null
  })();
</script>

<h1>{message}</h1>
<p>{number_list}</p>
