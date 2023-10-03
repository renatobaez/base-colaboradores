function Alert({color, msg}) {
	return (
		<>
      <div className={`alert alert-${color} my-2`}>{msg}</div>
    </>
  )
}
export default Alert