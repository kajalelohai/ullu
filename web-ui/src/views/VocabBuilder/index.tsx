function VocabBuilder() {
  return (
    <section>
      <article>
        <label htmlFor="word">Word</label>
        <input name="word" type="text"/>
        <label htmlFor="meaning">Meaning</label>
        <input name="meaning" type="select" />
        <h3>Nominative Case</h3>
      </article>
    </section>
  );
}

export default VocabBuilder;
