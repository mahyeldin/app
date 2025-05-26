function Button({children}) {
    return (
        <div>
           <button
            type="submit"
            className="px-6 py-3 bg-blue-700 text-white rounded-4xl font-medium hover:bg-blue-700 focus:outline-none focus:ring-2  focus:ring-blue-500 "
          >
            {children}
          </button>
        </div>
    )
}

export default Button

