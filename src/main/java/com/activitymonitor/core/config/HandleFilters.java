package com.activitymonitor.core.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Component
public class HandleFilters extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

		System.out.println("TESTE");
//		// This filter is not applied to /login request
//		if (request.getServletPath().equals("/login") || request.getServletPath().equals("/password_reset")
//				|| request.getServletPath().equals("/confirm_reset")) {
//			return true;
//		}
//
//		// This filter does not validate OPTIONS request
//		if (request.getMethod().equals("OPTIONS")) {
//			return true;
//		}
//
//		Usuario usuario = SecurityService.getAuthenticatedUser();
//		Comercial com = usuario != null ? usuario.getComercial() : null;
//
//		// Validates 'client' as a Long and fetches its respective entity
//		String client = getRequestDecodedParameter(request, Constants.REQUEST_PARAMETER_CLIENT);
//		if (!isEmpty(client)) {
//			Long clientId;
//			try {
//				clientId = Long.parseLong(client);
//			} catch (NumberFormatException e) {
//				throw new BadRequestException(
//						"Formato inválido [" + Constants.REQUEST_PARAMETER_CLIENT + ":" + client + "]");
//			}
//
//			// Does the user have access to this client?
//			if (com != null && !monetiq.isAssociated(clientId, com.getName(), null)) {
//				throw new ForbiddenException("Acesso indevido");
//			}
//			// Ok, go on
//			request.setAttribute(Constants.REQUEST_PARAMETER_CLIENT, clientId);
//		}
//
		return true;
	}
}