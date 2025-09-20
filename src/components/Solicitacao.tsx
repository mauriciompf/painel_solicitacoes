import { dropDownsData } from "../data";
import DropDown from "./DropDown";
import Input from "./Input";

function Solicitacao() {
  return (
    <form>
      <div className="mt-4 flex gap-1 py-2">
        {dropDownsData.map((dropDownData) => (
          <DropDown
            key={dropDownData.id}
            label={dropDownData.label}
            options={dropDownData.options}
          />
        ))}
      </div>

      <div className="mt-4 grid gap-[10px]">
        <Input label="cód. sydle:" maxLength={14} />
        <Input label="cód. disc.:" maxLength={6} />
        <Input label="link disc.:" />

        {/* <div>
          <span>id:</span>
          <span>1111</span>
        </div> */}

        {/* 
        <div>
          <span>Cód. Sydle: </span>
          <span>22025090322666</span>
        </div> */}

        {/* <div>
          <span>Cód. Disciplina:</span>
          <span>115270</span>
        </div>

        <div>
          <span>Link Disc.:</span>
          <span>.../pos/156971</span>
        </div> */}
        {/* 
        <div>
          <span>id:</span>
          <span>1111</span>
        </div> */}
      </div>

      <div>
        {/* <Button>Adicionar nova solicitação</Button>

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
        </div> */}

        {/* HR */}
        {/* <div></div>

        <p>Total de Tickets: 100</p> */}
      </div>
    </form>
  );
}

export default Solicitacao;
