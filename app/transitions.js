export default function(){
  console.log(this);
  this.transition(
    this.fromRoute('accounts.index'),
    this.toRoute('accounts.show.transactions.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
