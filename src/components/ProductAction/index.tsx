import React from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  IntallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Benefits,
  ShieldIcon,
  Button,
  Actions
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta Branca de Marca Desconhecida</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className='symbol'>R$</span>
          <span className='fraction'>34</span>
          <span className='cents'>99</span>
        </PriceRow>

        <IntallmentsInfo>em 3x de R$11,67</IntallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete Grátis</span>
          <span className="details"> Benefício Lorem Ipsum </span>
          <a href="#" className='more'>
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid> Comprar agora  </Button>
        <Button> Adicionar ao Carrinho  </Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra Garantida, receba o produto que está esperando ou devolvemos
            o dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
