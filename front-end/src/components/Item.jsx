import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max500/358086382.jpg?k=929255443a40d7fb887e49861964665a355a480faa463b066c0b3a68494939a7&o=&hp=1"
        alt="Imagem da acomodação"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold">Ponta Negra, Manaus</h3>
        <p className="truncate text-gray-600">
          Cobertura, duplex, em frente a praia da Ponta Negra, Manaus. As suítes
          possuem ar condicionado, TV de tela plana, Wi-Fi gratuito e cozinha
          completa. O condomínio oferece piscina ao ar livre, academia e
          churrasqueira.
        </p>
      </div>

      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
