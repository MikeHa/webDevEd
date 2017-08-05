Scopes & Closure Notes

# Chapter 1 What is Scope

* Scope is the set of rules that where and how a variable is looked up.
* The lookup is for the purpose of LHS (assigning a variable) or RHS (retrieving it's value).
* The Javascript Engine compiles code right before it executes it.
* Both types of lookups start within it's current scope and moves up until it finds it or it arrives at the global scope where it stops regardless of whether or not it finds what it is looking for.
* RHS references that don't find it's value will result in a ReferenceError.  LHS references will result in creating a global variable if not in strict mode or a ReferenceError in Strict Mode.  ReferenceErrors are scope resolution-failure related.  A TypeError implies that the Scope Resolution was successful but there was an illegal/impossible action attempted against it (such as trying to execute something that isn't a function as a function or referencing a property on a null or undefined value)
