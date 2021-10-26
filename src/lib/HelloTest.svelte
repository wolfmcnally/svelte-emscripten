<script lang="ts">
  import instantiate_hello, { HelloModule } from "./hello.js"

  let hello: HelloModule;

  export let message = '';

  let number_list: number[] = [];

  let updateOutput = (input: string) => { return ''; }

  let inputString = "Hello, world!";
  $: outputHex = updateOutput(inputString);

  (async () => {
    hello = await instantiate_hello();
    message = hello.returnString();
    number_list = hello.reverse([1, 2, 3]);

    updateOutput = (input: string) => {
      return hello.dataToHex(hello.sha256(inputString));
    }

    // console.log(hello.sha256("Hello, world!"));
    // const hex = hello.dataToHex(new Uint8Array([0, 1, 2, 3, 0xff]));
    // console.log(hex);
    // const data = hello.hexToData(hex);
    // console.log(data);
    // const badData = hello.hexToData("not hex");
    // console.log(badData); // null
  })();
</script>

<main>
  <h2>Using WebAssembly To Do Stuff</h2>

  <p>Return a string: “<strong>{message}</strong>”.</p>
  <p>Reverse a list of numbers: <strong>{number_list}</strong>.</p>

  <label>
    Compute the SHA-256 digest of a UTF-8 string:
    <input bind:value={inputString}>
  </label>
  <p><strong><span class="data">{outputHex}</span></strong></p>
</main>

<style>
  main {
    text-align: left;
    background: lightGray;
    width: 100%;
    padding: 10px;
  }

  .data {
    font-family: monospace;
    font-size: 12pt;
    word-wrap: break-word;
    display: block;
  }
</style>
