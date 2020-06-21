<script>
  import { searchCount, Resultsearch } from "../store/index.js";
  import { Row, Col, Card, CardBody } from "sveltestrap";

  let new_Count;
  const unsuscribe = searchCount.subscribe(value => {
    new_Count = value;
  });
</script>

<Row>
  <Col>
    {#await $Resultsearch}
      Cargando...
    {:then data}
      {#if data.Title !== undefined}
        <Card class="mt-2">
          <CardBody>
            <Row>
              <Col sm="4">
                <img src={data.Poster} alt="100" class="img-fluid" />
              </Col>
              <Col sm="8">
                <h5>
                  <strong>{data.Title}</strong>
                </h5>
                <span>
                  G&eacute;nero:
                  <small>{data.Genre}</small>
                </span>
                <br />
                <span>
                  Lenguaje:
                  <small>{data.Language}</small>
                </span>
                <br />
                <span>
                  Descripci&oacute;n :
                  <br />
                  <small>{data.Plot}</small>
                </span>
              </Col>
            </Row>
          </CardBody>
        </Card>
      {/if}
    {:catch error}
      <p>{error}</p>
    {/await}
  </Col>
</Row>
