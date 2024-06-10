import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "hello").get("/hi", () => "hi");
app.listen(8080, () => console.log("Listening!"));
