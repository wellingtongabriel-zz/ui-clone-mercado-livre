import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt='T-Shirt'/>
          </Gallery>

          <Info />
        </Column>

        <Column>

          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className='title'> Compra garantida com Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className='title'> Compra garantida do vendedor</p>
        <p className="description">
          Sem garantia
        </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2> Descrição </h2>

    <p>
      é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
      e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou
      uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
      Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a
      editoração eletrônica.
      <br/>
      <br/>
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
      e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou
      uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
      Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a
      editoração eletrônica.
    </p>
  </Description>
)



export default Product;
