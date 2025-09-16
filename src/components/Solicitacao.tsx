import Button from "./Button";
import DropDown from "./DropDown";

function Solicitacao() {
  return (
    <div>
      <div className="flex">
        <DropDown />
        {/* <Button>
          Status: <span>Pendente</span>
        </Button>
        <Button>
          Tipo: <span>Padrão</span>
        </Button>
        <Button>
          Data: <span>Hoje</span>
        </Button> */}
      </div>

      <div>
        <div>
          <span>Cód. Sydle: </span>
          <span>22025090322666</span>
        </div>

        <div>
          <span>Cód. Disciplina:</span>
          <span>115270</span>
        </div>

        <div>
          <span>Link Disc.:</span>
          <span>.../pos/156971</span>
        </div>

        <div>
          <span>id:</span>
          <span>1111</span>
        </div>
      </div>

      <div>
        <Button>Adicionar nova solicitação</Button>

        <div>
          <span>Padrão</span>
          <span>50%</span>
        </div>

        <div>
          <span>Padrão</span>
          <span>50%</span>
        </div>

        <div>
          <span>Padrão</span>
          <span>50%</span>
        </div>

        {/* HR */}
        <div></div>

        <p>Total de Tickets: 100</p>
      </div>
    </div>
  );
}

export default Solicitacao;
