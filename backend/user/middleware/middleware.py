class LoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Registra la solicitud entrante
        print(f"Cuerpo: {request.body}")

        # Llama a la vista correspondiente para procesar la solicitud
        response = self.get_response(request)

        # Registra la respuesta saliente
        print(f"Cuerpo: {response.content}")

        return response
