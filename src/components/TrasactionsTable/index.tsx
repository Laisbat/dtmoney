import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Coopersystem</td>
            <td className="deposit">R$12.000,00</td>
            <td>Trabalho</td>
            <td>07/11/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$2.000,00</td>
            <td>Trabalho</td>
            <td>07/11/2021</td>
          </tr>
        </tbody>

      </table>
    </Container>
  );
}