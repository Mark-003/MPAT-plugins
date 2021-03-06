<?php
/**
 *
 * Copyright (c) 2017 MPAT Consortium , All rights reserved.
 * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library. If not, see <http://www.gnu.org/licenses/>.
 *
 * AUTHORS:
 * Stefano Miccoli (stefano.miccoli@finconsgroup.com)
 * Marco Ferrari (marco.ferrari@finconsgroup.com)
 **/
namespace MPAT\UserRoles;

class LayoutDesigner extends Role {
	public static $slug = "layout_designer";
	
	public static $name = "Layout Designer";
	
	public static $capabilities = array(
			"mpat_view_styles" => true,
			"mpat_create_styles" => true,
			"mpat_edit_styles" => true,
			"mpat_delete_styles" => true,
			"mpat_view_templates" => true,
			"mpat_create_templates" => true,
			"mpat_edit_templates" => true,
			"mpat_delete_templates" => true,
	);
}
