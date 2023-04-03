# Password Manager

# GitFlow для разработчиков
- наши рабочие ветки: frontend, backend, tests.
- для добавления новых фич, логики или дизайна, тестов используем ветки, которые наследуем от приведенных выше.
- такие ветки называем: "feature/encrypting-logic", "testing/test-authorization", "feature/auth-page", "bugfix/vse-slomalos"
- сделали фичу или тест - делаем пул реквест в ветку dev и отписываем, что новая фича готова
- если все апрувнули пулл, мержим ветку в dev, на своей ветке делаем rebase dev
- после rebase можно удалить ветку "feature/.." или "testing/..", или "bigfix/.."
