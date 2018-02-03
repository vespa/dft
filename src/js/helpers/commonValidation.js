export function OnlyNumbers(event)  {
	if(/\D/.test(event.key)) event.preventDefault();
}