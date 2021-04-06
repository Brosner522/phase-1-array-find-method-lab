
superbowlWin = (record) => {
    //Finding what year the Chiefs won.
    const result = record.find( record => record.result === "W" );
    //Using ternary expression. 
    return !!result ? result.year : undefined;
  }