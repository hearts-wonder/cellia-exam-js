 const number = document.getElementsByTagName('span');
 console.log(number);
 // isotope appel triage par prix croissant
 $('#sortbut').on('click',function(){
 	$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$grid.isotope({
  sortBy: 'span',
  sortAscending: false
});
 });
 