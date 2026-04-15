function Projetos() {

  const projetos = [
    {
      nome: "Portfólio HTML",
      descricao: "Meu primeiro site"
    },
    {
      nome: "App Sustentável",
      descricao: "Projeto acadêmico"
    }
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((proj, index) => (
        <div key={index}>
          <h3>{proj.nome}</h3>
          <p>{proj.descricao}</p>
        </div>
      ))}

    </section>
  );
}

export default Projetos;