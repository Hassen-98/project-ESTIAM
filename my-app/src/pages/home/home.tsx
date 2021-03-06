import React from "react";
import { useHistory } from "react-router";
import * as Styled from "./home.styled";
import Button from "../../components/common/button";
import kebabs, { Kebab } from "../../data/kebabs.data";
import Card from "../../components/common/card";
import * as Style from '../../components/header/header.styled'
interface Props {
  cart: {
    kebab: Kebab;
    quantity: number;
  }[];
}

const Home = (props: Props) => {
  const history = useHistory();

  return (
    <div>
      <Styled.PopularKebabs>
        {kebabs.map((kebab, index) => (
          <Card
            key={index}
            title={kebab.name || ""}
            image={kebab.image || ""}
            isSelected={false}
            onSelect={() =>
              history.push(`${process.env.PUBLIC_URL}/kebabs/${kebab.slug}`)
            }
          />
        ))}

        <Button
          name="Configurer votre kebab"
          onClick={() =>
            history.push(`${process.env.PUBLIC_URL}/kebabs/config/breads`)
          }
        />
      </Styled.PopularKebabs>

      <Styled.Cart>
        <h2>
          Total :{" "}
          {props.cart.reduce(
            (acc, cur) => acc + (cur.kebab.price ?? 0) * cur.quantity,
            0
          )}{" "}
          €
        </h2>
        <Button
          name="Passer la commande"
          onClick={() =>
            history.push(`${process.env.PUBLIC_URL}/order-validate`)
          }
        />

        <h2>Votre commande</h2>
        <Styled.CartItemList>
          {props.cart.map((item, index) => (
            <Styled.CartItem key={index}>
              <div>
                {item.kebab.name && <h4>{item.kebab.name}</h4>}
                {([] as string[])
                  .concat(`Kebab`)
                  .concat(item.kebab.bread?.name || [])
                  .concat(item.kebab.meat?.name || [])
                  .concat(
                    item.kebab.fillings
                      ?.map((filling) => filling.name)
                      .join(" & ") || []
                  )
                  .concat(
                    item.kebab.sauces?.map((sauce) => sauce.name).join(" & ") ||
                      []
                  )
                  .join(", ")}
              </div>
              <span>x{item.quantity}</span>
            </Styled.CartItem>
          ))}
        </Styled.CartItemList>
        <Style.HeaderWrapper>
      <a href={`${process.env.PUBLIC_URL}`}>
      <button >🗑️</button>
      </a>
    </Style.HeaderWrapper>
      </Styled.Cart>
    </div>
  );
};

export default Home;
