from django.core.exceptions import ImproperlyConfigured


class MultiPermissionMixin:
    """
    for automatically determining of the permission classes
    """

    # settings
    permission_action_classes: dict
    action: str
    default_permission_classes_key = "default"

    # errors
    DEFAULT_PERMISSION_CLASSES_ARE_NOT_SPECIFIED_ERROR = (
        f"You have to specify {default_permission_classes_key}" "setting in permission_action_classes"
    )

    PERMISSION_ACTION_CLASSES_ATTRIBUTE_IS_NOT_SPECIFIED = (
        "There is no 'permission_action_classes' attribute in the class"
    )

    def get_permissions(self):
        try:
            result = self.permission_action_classes.get(
                self.action,
                self.permission_action_classes.get(self.default_permission_classes_key, None),
            )
            if result:
                return (permission() for permission in result)
            raise ImproperlyConfigured(self.DEFAULT_PERMISSION_CLASSES_ARE_NOT_SPECIFIED_ERROR)
        except AttributeError:
            raise ImproperlyConfigured(self.PERMISSION_ACTION_CLASSES_ATTRIBUTE_IS_NOT_SPECIFIED)


class MultiSerializerMixin:
    """
    for automatically determining of the serializer class
    """

    # settings
    serializer_action_classes: dict
    action: str
    default_serializer_key = "default"

    # errors
    DEFAULT_SERIALIZER_IS_NOT_SPECIFIED_ERROR = (
        f"You have to specify {default_serializer_key}" "setting in serializer_action_classes"
    )

    SERIALIZER_ACTION_CLASSES_ATTRIBUTE_IS_NOT_SPECIFIED = (
        "There is no 'serializer_action_classes' attribute in the class"
    )

    def get_serializer_class(self):
        try:
            result = self.serializer_action_classes.get(
                self.action,
                self.serializer_action_classes.get(self.default_serializer_key, None),
            )
            if result:
                return result
            raise ImproperlyConfigured(self.DEFAULT_SERIALIZER_IS_NOT_SPECIFIED_ERROR)
        except AttributeError:
            raise ImproperlyConfigured(self.SERIALIZER_ACTION_CLASSES_ATTRIBUTE_IS_NOT_SPECIFIED)
