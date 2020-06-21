<script>
  import { Row, Col, Card, CardBody } from "sveltestrap";
  import axios from "axios";
  import { searchCount, Resultsearch } from "../store/index";

  let searchInput = "";

  $: if (searchInput.length > 3) {
    let buscando = async e => {
      let result = await axios({
        method: "get",
        url: `http://www.omdbapi.com/?t=${searchInput}&apiKey=8df5f7f5`
      });
      Resultsearch.actualizar(result.data);
    };
    buscando();
  }
</script>

<div class="container-fluid">
  <Row>
    <Col sm="12">
      <input
        type="text"
        placeholder="ingrese nombre de pelicula"
        class="form-control"
        bind:value={searchInput} />
    </Col>
  </Row>

</div>
